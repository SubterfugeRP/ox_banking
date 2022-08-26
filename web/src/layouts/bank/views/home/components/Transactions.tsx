import { Box, Button, createStyles, Group, Paper, Stack, Text, ThemeIcon } from '@mantine/core';
import { TbArrowDownLeft, TbArrowUpRight, TbArrowsRightLeft } from 'react-icons/tb';
import { formatNumber } from '../../../../../utils/formatNumber';
import HeaderGroup from '../../../components/HeaderGroup';

const mockTransactions: { type: 'inbound' | 'outbound'; amount: number; account: string; date: string }[] = [
  { type: 'inbound', amount: 3500, account: 'Billy', date: '01/01/1999' },
  { type: 'outbound', amount: 7995, account: 'Bob', date: '19/08/2022' },
  { type: 'inbound', amount: 19120, account: 'Billy', date: '31/02/2000' },
];

const useStyles = createStyles((theme) => ({
  transactions: {
    backgroundColor: theme.colors.dark[6],
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
  },

  paper: {
    height: 360,
  },

  stack: {
    height: '100%',
  },
}));

const Transactions: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Paper p="md" className={classes.paper}>
      <Stack justify="space-between" className={classes.stack}>
        <Stack>
          <HeaderGroup header="Recent Transactions" Icon={TbArrowsRightLeft} />
          <Stack>
            {mockTransactions.map((transaction, index) => (
              <Box className={classes.transactions} key={`transaction-${index}`}>
                <Group position="apart">
                  <Group>
                    <ThemeIcon size="lg" color={transaction.type === 'inbound' ? 'teal' : 'red'} variant="light">
                      {transaction.type === 'inbound' ? <TbArrowDownLeft size={24} /> : <TbArrowUpRight size={24} />}
                    </ThemeIcon>
                    <Stack spacing={0}>
                      <Text>{transaction.account}</Text>
                      <Text size="xs" color="dark.2">
                        {transaction.date}
                      </Text>
                    </Stack>
                  </Group>
                  {transaction.type === 'inbound' ? (
                    <Text color="teal" weight={700}>
                      +{formatNumber(transaction.amount)}
                    </Text>
                  ) : (
                    <Text color="red" weight={700}>
                      -{formatNumber(transaction.amount)}
                    </Text>
                  )}
                </Group>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Button uppercase color="blue">
          See all
        </Button>
      </Stack>
    </Paper>
  );
};

export default Transactions;
